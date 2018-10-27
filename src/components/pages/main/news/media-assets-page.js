import React from 'react';
import * as dummyData from '../../../widget/dummyData';

class MediaAssetsPage extends React.Component{
    render(){
        return(
            <div className = "media-assets marginBottom-64">
                <div className = "title">
                    Media Assets
                </div>
                <div className = "comment">
                    By using this Site, I agree to its <span>Terms & Conditions.</span> All content downloaded from the Site (photography, audio and video, etc.) may be used for editorial purposes only. Any other use of Site content including, without limitation personal or commercial use, is strictly prohibited.  For additional media asset inquiries, refer to our <span>Contact</span>  page.
                </div>
                <div className = "media-assets-list row">
                    <div className = "col-md-4 col-sm-12">
                        <img alt="..." src = {dummyData.media_assets[0].asset}/>
                        <a href="">{dummyData.media_assets[0].link}</a>
                    </div>
                    <div className = "col-md-4 col-sm-12">
                        <img alt="..." src = {dummyData.media_assets[1].asset}/>
                        <a href="">{dummyData.media_assets[1].link}</a>
                    </div>
                    <div className = "col-md-4 col-sm-12">
                        <img alt="..." src = {dummyData.media_assets[2].asset}/>
                        <a href="">{dummyData.media_assets[2].link}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MediaAssetsPage;