import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../pages/Home/Home/Home';
import Team from '../pages/Team/Team';
import PracticeArea from '../pages/PracticeArea/PracticeArea';
import Arbitration from '../pages/PracticeArea/Areas/Arbitration/Arbitration';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/team-members',
                element: <Team />
            },
            {
                path: '/practice-areas',
                element: <PracticeArea />
            },
            {
                path: '/practice-areas/Arbitration',
                element: <Arbitration />
            }
        ]
    },
]);

export default router;