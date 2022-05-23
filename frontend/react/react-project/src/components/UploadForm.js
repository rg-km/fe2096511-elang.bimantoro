// TODO: answer here
import "./App.css";
import ".index.css";

export default function UploadForm({onSubmit}) {
  // TODO: answer here
  return (<div className="UploadForm">
 <div className='uploadForm' aria-label='UploadForm'>
  <form onSubmit={onSubmit} aria-label="uploadForm">
    <input type="text" aria-label='CaptionInput' placeholder='caption'/>
    <input type="text" aria-label='ImageInput' placeholder="ImageURL" />
    <button type="submit" aria-label='SubmitButton' buttonOnClick = "" >Upload</button>
  </form>
 </div>
 </div>
  )
}