import React, { Component }from 'react';
import { connect } from "react-redux";
import ImageUpload from '../components/FileUpload';
import ParseObject from '../components/ParseObject'

class uploadTranslations extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <ImageUpload urlFilePath={this.props.UrlPath}/>
                        <div className="container">
                            <div>{this.props.filePath}</div>
                            <button onClick={this.props.ResetPath}>Reset Path</button>
                            <button onClick={this.props.FileUpload}>Add Path</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <ParseObject myObjectFilePath={this.props.filePath}/>
                        the word in en
                    </div>
                    <ul className="col-12">
                        <li><span>ro</span> - <span>cuvantul in romana</span></li>
                        <li><span>es</span>- <span>cuvantul in spaniola</span></li>
                    </ul>
                    <div className="col-12 text-center">
                        <button>upload info</button>
                    </div>
                </div>
            </div>
        )
    } 
}

const mapStateToProps = state => {
    return {
        filePath: state.filePath
    }
};
  
const mapDispatchToProps = dispatch => {
    return {
        ResetPath: () => {dispatch({type: 'PATH_RESET'})},
        FileUpload: () => {dispatch({type: 'UPLOAD_PATH'})},
        UrlPath: (url) => {dispatch({type: 'URL_PATH', url: url})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (uploadTranslations);
