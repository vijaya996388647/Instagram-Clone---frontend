

export const uploadToCloudinary = async (pics) => {
  if (pics) {
    
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", "Mycloud");
    data.append("cloud_name", "dt22xzuzt");

    const res = await fetch("https://api.cloudinary.com/v1_1/dt22xzuzt/image/upload", {
      method: "post",
      body: data,
    })
      
      const fileData=await res.json();
      console.log("url : ", fileData.url.toString());
      return fileData.url.toString();

  } else {
    console.log("error");
  }
};


