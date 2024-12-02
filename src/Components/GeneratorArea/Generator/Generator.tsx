import { ChangeEvent, useState } from "react";
import "./Generator.css";
import { dallEService } from "../../../Services/DallEService";
import { Spinner } from "../../SharedArea/Spinner/Spinner";

export function Generator(): JSX.Element {
  const [imageDescription, setImageDescription] = useState<string>("");
  const [imageSource, setImageSource] = useState<string>();

  function handleChange(args: ChangeEvent<HTMLTextAreaElement>) {
    setImageDescription(args.target.value);
  }

  async function generateImage() {
    try {
      setImageSource("");
      const url = await dallEService.generateImage(imageDescription);
      setImageSource(url);
    } catch (error: any) {
      alert(error.error);
      console.log(error);
      
    }
  }
  return (
    <div className="Generator">
      <textarea onChange={handleChange} value={imageDescription} placeholder="Describe the image to generate.."></textarea>
      <br />
      <button onClick={generateImage}>Generate</button>
      <br />

{imageSource === ""  && <Spinner/>}
{imageSource !== ""  && <img src={imageSource}/>}
    </div>
  );
}
