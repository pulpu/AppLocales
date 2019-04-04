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
                        <ImageUpload/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <ParseObject />
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


export default uploadTranslations;
