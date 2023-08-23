import React from 'react';
import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../pages/Home/Home/Home';
import Team from '../pages/Team/Team';
import PracticeArea from '../pages/PracticeArea/PracticeArea';
import Arbitration from '../pages/PracticeArea/Areas/Arbitration/Arbitration';
import Bankruptcy from '../pages/PracticeArea/Areas/Bankruptcy/Bankruptcy';
import Corporate from '../pages/PracticeArea/Areas/Corporate/Corporate';
import EstatePlanning from '../pages/PracticeArea/Areas/EstatePlanning/EstatePlanning';
import Litigation from '../pages/PracticeArea/Areas/Litigation/Litigation';
import Mediation from '../pages/PracticeArea/Areas/Mediation/Mediation';
import Parenting from '../pages/PracticeArea/Areas/Parenting/Parenting';
import Tax from '../pages/PracticeArea/Areas/Tax/Tax';
import Tort from '../pages/PracticeArea/Areas/Tort/Tort';
import Collaborative from '../pages/PracticeArea/Areas/Collaborative/Collaborative';
import Company from '../pages/PracticeArea/Areas/Company/Company';
import Labour from '../pages/PracticeArea/Areas/Labour/Labour';

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
            },
            {
                path: '/practice-areas/Bankruptcy',
                element: <Bankruptcy />
            },
            {
                path: '/practice-areas/Corporate',
                element: <Corporate />
            },
            {
                path: '/practice-areas/Estate',
                element: <EstatePlanning />
            },
            {
                path: '/practice-areas/litigation',
                element: <Litigation />
            },
            {
                path: '/practice-areas/mediation',
                element: <Mediation />
            },
            {
                path: '/practice-areas/parenting',
                element: <Parenting />
            },
            {
                path: '/practice-areas/tax',
                element: <Tax />
            },
            {
                path: '/practice-areas/tort',
                element: <Tort />
            },
            {
                path: '/practice-areas/collaborative',
                element: <Collaborative />
            },
            {
                path: '/practice-areas/company',
                element: <Company />
            },
            {
                path: '/practice-areas/labour',
                element: <Labour />
            },
        ]
    },
]);

export default router;