import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


const CLOUDINARY_UPLOAD_PRESET = 'cz1qcgoq';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dmatkcsho/image/upload';

class ImgUploader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: ''
        };
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });

        this.handleImageUpload(files[0]);
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }

    render() {
        return (
            <form>
                <div className="FileUpload">
                    <Dropzone
                        onDrop={this.onImageDrop.bind(this)}
                        multiple={false}
                        accept="image/*">
                        <div>Drop an image or click to select a file to upload.</div>
                    </Dropzone>
                </div>

                <div>
                    {this.state.uploadedFileCloudinaryUrl === '' ? null :
                        <div>
                            <p>{this.state.uploadedFile.name}</p>
                            <img src={this.state.uploadedFileCloudinaryUrl} />
<Image src={this.state.uploadedFileCloudinaryUrl}/>
                            {/*<Image publicId={this.state.uploadedFileCloudinaryUrl} secure="true">*/}
                                {/*<Transformation width="150" height="150" gravity="face" radius="20" effect="sepia" crop="thumb" />*/}
                                {/*<Transformation overlay="cloudinary_icon" gravity="south_east" x="5" y="5" width="50" opacity="60" effect="brightness:200" />*/}
                                {/*<Transformation angle="10" />*/}
                            {/*</Image>*/}
                        </div>}
                </div>
            </form>
        )
    }
}
export default ImgUploader;
