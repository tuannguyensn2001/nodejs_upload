const { getDownloadURL, ref, uploadBytes } = require("firebase/storage");
const { storage } = require("../firebase");

const downloadFile = async (ref) => {
  return await getDownloadURL(ref);
};

exports.upload = async (file) => {
  const storageRef = ref(storage, file.originalname);
  const result = await uploadBytes(storageRef, file.buffer);
  return await downloadFile(result.ref);
};
