import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const fileRouter = {
  projectImageUploader: f(
    {
      image: { maxFileSize: "4MB", maxFileCount: 10 },
    },
    { awaitServerData: true }
  )
    .middleware(async ({ req, res }) => {
      const user = await currentUser();

      if (!user) {
        throw new UploadThingError("Unauthorized");
      }

      return { user: user };
    })
    .onUploadError(async ({ error, fileKey }) => {
      console.error(error, fileKey);
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log(file);
    }),
};