import express from "express";
import Photo from "../../mongoose/photo/photo";
// import PhotoAlbum from "../../mongoose/photo/photoAlbum";
// import photoTag from "../../mongoose/photo/photoTag";
// import comment from "../../mongoose/photo/comment";
// import like from "../../mongoose/photo/like";
// import User from "../../mongoose/user/user"
// import passport from "passport";

function pagination(contents, page = 0, size = 10, total) {
  return {
    contents: contents,
    page: page,
    size: size,
    totalPage: Math.ceil(total / size),
  };
}

function selectedRows(page, size, count) {
  const startRow = page * size;
  const endRow = page !== Math.ceil(count / size) - 1 ? startRow + size : count;
  return { startRow, endRow };
}

const photoRouter = express.Router();

photoRouter
  .get("/", async (req, res, next) => {
    try {
      // ------------------ Data Format -------------------------
      // params: {
      //  page: page,
      //  size: size
      // }
      // --------------------------------------------------------
      const { page, size } = req.query;

      // referencePhoto 길이가 1이 아닌 데이터만 사용자에게 보여짐 ( wrapper or null )
      const photos = await Photo.find({
        referencePhoto: { $not: { $size: 1 } },
      });

      // pagination 적용하기 위한 start, end 설정
      const { startRow, endRow } = selectedRows(+page, +size, +photos.length);

      res
        .status(200)
        .send(
          pagination(
            photos.slice(startRow, endRow),
            +page,
            +size,
            +photos.length
          )
        );
    } catch (error) {
      console.error(error);
      res.status(400).send("error acquired");
    }
  })
  .post("/create", async (req, res, next) => {
    // ------------------ Data Format -------------------------
    // {
    //   "photos": [
    //       {
    //           "link": "1111",
    //           "largeSource": "1111",
    //           "mediumSource": "1111",
    //           "smallSource": "1111",
    //           "caption": "1111111111111"
    //       },
    //       {
    //           "link": "2222",
    //           "largeSource": "2222",
    //           "mediumSource": "2222",
    //           "smallSource": "2222",
    //           "caption": "22222222222222"
    //       }
    //   ],
    //   "photoCount": 2,
    //   "caption": "wrapper"
    // }
    //----------------------------------------------------------
    try {
      const { photos, photoCount, caption } = req.body;

      // 사진이 한장인 경우 생성
      if (photoCount <= 1) {
        await Photo.create({
          ...photos[0],
          referencePhoto: null,
        });
      } else {
        // 사진이 여러장인 경우 wrapper를 만들고, 각 사진들을 만든다음 wrapper의 referencePhoto를 업데이트
        const wrapperPhoto = await Photo.create({
          caption: caption,
          referencePhoto: null,
        });

        const referencedPhotoList = [];
        for await (let photo of photos) {
          const createdPhoto = Photo.create({
            ...photo,
            referencePhoto: wrapperPhoto._id,
          });
          referencedPhotoList.push((await createdPhoto)._id);
        }

        await Photo.updateOne({ _id: wrapperPhoto._id }, [
          {
            $set: {
              referencePhoto: referencedPhotoList,
            },
          },
        ]);
      }

      res.status(201).send("create success");
    } catch (error) {
      console.error(error);
      res.status(400).send("error acquired");
    }
  })
  .delete("/", async (req, res, next) => {
    try {
      const _id = req.query._id;
      await Photo.deleteOne({ _id: _id });
      // await Photo.deleteMany({});
      res.status(204).send("delete success");
    } catch (error) {
      console.error(error);
      res.status(400).send("error acquired");
    }
  });

export default photoRouter;
