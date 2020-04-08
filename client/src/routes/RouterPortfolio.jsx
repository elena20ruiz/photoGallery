import React from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Portfolio from '../components/Portfolio/Portfolio.jsx';

function RouterPortfolio() {
    let match = useRouteMatch();

    return (
        <div>
            <Switch>
                <Route path={`${match.path}/:portfolioId`}>
                    <Portfolio />
                </Route>
                <Route path={match.path}>gt s
                    <h3>Please select a portfolio.</h3>
                </Route>
            </Switch>
        </div>

    )
}

export default RouterPortfolio;