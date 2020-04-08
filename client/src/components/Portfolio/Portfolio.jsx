import React from "react";
import {
    useParams
} from "react-router-dom";

import PortfolioHeader from '../PortfolioHeader/PortfolioHeader';
import PortfolioBody from '../PortfolioBody/PortfolioBody';

function Portfolio() {
    let { portfolioId } = useParams();

    // TODO: LOAD PORTFOLIO INFORMATION
    // - Title
    // - Author
    // - Date
    // - Description
    // - Cover photo
    // - All photos

    return (
        <div>
            <p> ID: {portfolioId} </p>
            <PortfolioHeader />
            <PortfolioBody/>
        </div>
    )
}

export default Portfolio;