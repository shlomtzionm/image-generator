class AppConfig {

    // Backend urls:
    public readonly backendUrl = "http://localhost:4000/api";
 
    //Axios options:
    public readonly axiosOptions = {
        headers: { // Tell axios to also send the image:
            "Content-Type": "multipart/form-data" // We're sending also files.
        }
    };
}

export const appConfig = new AppConfig();
