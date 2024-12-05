import { ChangeEvent, useState } from "react";
import "./Generator.css";
import { dallEService } from "../../../Services/dallEService";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";

export function Generator(): JSX.Element {
  const [imageDescription, setImageDescription] = useState<string>("");
  const [imageSource, setImageSource] = useState<string>();
  const [loading, setLoading] = useState(false);

  function handleChange(args: ChangeEvent<HTMLTextAreaElement>) {
    setImageDescription(args.target.value);
  }

  async function generateImage() {
    setLoading(true);
    setImageSource("");
    try {
      const url: string = await dallEService.generateImage(imageDescription);
      setImageSource(url);
    } catch (error: any) {
      alert(error.error);
      console.log(error);
    }
    setLoading(false);
  }
  return (
    <div className="Generator">
      <textarea onChange={handleChange} value={imageDescription} placeholder="Describe the image to generate.."></textarea>
      <LoadingButton size="small" onClick={generateImage} endIcon={<SendIcon />} loading={loading} loadingPosition="end" variant="contained">
        Send
      </LoadingButton>

      {imageSource !== "" && <img src={imageSource} />}
    </div>
  );
}
