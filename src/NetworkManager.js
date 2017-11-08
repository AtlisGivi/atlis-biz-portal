import Cookies from 'universal-cookie';

import defaultLocations from '../public/poplular_places.json';


import axios from 'axios';

// import {withRouter} from 'react-router'

class NetworkManager
{
    constructor()
    {
        const cookies = new Cookies();

        this.defaultLocations = undefined;

        // console.info('coockie: ' + cookies.get('http://localhost:3000/' +  '_aid'));

        /* DEV */
        this.atlisToken = cookies.get('token');//'iHWCJqeQyA==eyJ1c2VySWQiOjExLCJ1c2VyRmlyc3ROYW1lIjoiWXV2YWwiLCJ1c2VyTGFzdE5hbWUiOiJHaXZpIiwidXNlckFub255bW91cyI6ZmFsc2UsInVzZXJFbmFibGVkIjp0cnVlLCJ1c2VyUGhvbmVOdW1iZXJJZCI6NjcyOTY1LCJ1c2VyVG9rZW5HZW5lcmF0aW9uVGltZSI6MTUwMjAwNzYzMzA4NCwidXNlckNyZWF0ZWRBdCI6MTQ2ODE0MzExMjMzMywidXNlclVwZGF0ZWRBdCI6MTUwMjAwNzYyNjQ1MiwidXNlck1hbnVhbEludGVydmVudGlvbiI6dHJ1ZSwidXNlckZha2UiOmZhbHNlLCJ1c2VyTGF0aXR1ZGUiOjQwLjc1ODQ3LCJ1c2VyTG9uZ2l0dWRlIjotNzMuOTY4ODg0LCJ1c2VyQXBwcm94aW1hdGVMb2NhdGlvbiI6ZmFsc2UsInVzZXJJbmZsdWVuY2VyIjp0cnVlLCJ1c2VyVHlwZSI6IlJlZ2lzdGVyZWQifQ==';
        // this.atlisToken = 'DSB01rpnvg==eyJ1c2VySWQiOjcsInVzZXJGaXJzdE5hbWUiOiJZdXZhbCIsInVzZXJMYXN0TmFtZSI6IkciLCJ1c2VyQW5vbnltb3VzIjpmYWxzZSwidXNlckVuYWJsZWQiOnRydWUsInVzZXJQaG9uZU51bWJlcklkIjoxNzU1MjYzNSwidXNlclRva2VuR2VuZXJhdGlvblRpbWUiOjE0OTk5NTI0MzkxNzksInVzZXJDcmVhdGVkQXQiOjE0Mzc2NDA5MjM5NjUsInVzZXJVcGRhdGVkQXQiOjE0OTk5NTI0MzM1NjEsInVzZXJNYW51YWxJbnRlcnZlbnRpb24iOnRydWUsInVzZXJGYWtlIjpmYWxzZSwidXNlckxhdGl0dWRlIjo0MC43NTg0NywidXNlckxvbmdpdHVkZSI6LTczLjk2ODg4NCwidXNlckFwcHJveGltYXRlTG9jYXRpb24iOmZhbHNlLCJ1c2VySW5mbHVlbmNlciI6ZmFsc2V9';
        this.envPrefix = process.env.NODE_ENV !== "production" ? 'https://proxy.atlis.me/' : '';
        /* DEV */
        // this.baseURL = this.envPrefix + 'http://api-dev.atlis.me/';
        this.baseURL = this.envPrefix + 'https://api.atlis.me/';
        this.baseURLNoPrefix = 'https://api.atlis.me/';
    }

    getTokenHeader()
    {
        // console.info('getTokenHeader, Token: ' + this.atlisToken);
        if (this.atlisToken !== undefined)
        {
            return {'Atlis-Token': this.atlisToken};
        }
        else
        {
            return null;
        }
    }

    setToken(callback)
    {
        var cookies = new Cookies();

        axios({
            method: 'post',
            url: this.baseURL + 'user/anonymous'
        })
            .then(res => {
                cookies.set('token', res.headers['atlis-token']);
                // console.info('Set Token: ' + res.headers['atlis-token']);
                this.atlisToken = cookies.get('token');
                callback();
            });
    }

    getCategory(heading)
    {
        let catName = "";

        if (heading !== undefined && heading.categoryThirdLevel !== undefined && heading.categoryThirdLevel.categoryThirdLevelName !== undefined
            && !heading.categoryThirdLevel.categoryThirdLevelName.startsWith("Non "))
        {
            catName = heading.categoryThirdLevel.categoryThirdLevelName;
        }
        else if (heading !== undefined && heading.categorySecondLevel !== undefined && heading.categorySecondLevel.categorySecondLevelName !== undefined
            && !heading.categorySecondLevel.categorySecondLevelName.startsWith("Non "))
        {
            catName = heading.categorySecondLevel.categorySecondLevelName;
        }
        else
        {
            catName = (heading === undefined || heading.categoryFirstLevel === undefined) ? "" : heading.categoryFirstLevel.categoryFirstLevelName;
        }
        if (heading !== undefined && heading.categoryFirstLevel !== undefined
            && "Restaurants" === heading.categoryFirstLevel.categoryFirstLevelName)
        {
            if (heading !== undefined && heading.categorySecondLevel !== undefined && 0 !== heading.categorySecondLevel.categorySecondLevelId
                && heading.categorySecondLevel.categorySecondLevelId >= 743)
            {
                return catName;
            }
            if (heading !== undefined && heading.categorySecondLevel !== undefined && 0 !== heading.categorySecondLevel.categorySecondLevelId
                && "Pizza" === heading.categorySecondLevel.categorySecondLevelName)
            {
                catName += " Places";
            }
            else if (heading !== undefined && heading.categorySecondLevel !== undefined
                && "Other" === heading.categorySecondLevel.categorySecondLevelName)
            {
                catName = "Restaurants";
            }
            else if (heading !== undefined && heading.categorySecondLevel !== undefined && 0 !== heading.categorySecondLevel.categorySecondLevelId
                && "Sushi Bars" !== heading.categorySecondLevel.categorySecondLevelName
                && "Steakhouses" !== heading.categorySecondLevel.categorySecondLevelName
                && "Delis" !== heading.categorySecondLevel.categorySecondLevelName
                && "Diners" !== heading.categorySecondLevel.categorySecondLevelName
                && "Burgers" !== heading.categorySecondLevel.categorySecondLevelName)
            {
                catName += " Restaurants";
            }
        }

        return catName;
    }

    getDistanceFromLatLon(lat1, lon1, lat2, lon2)
    {
        var deg2rad = require('deg2rad');

        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2 - lat1);  // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = (R * c) / 1.6; // Distance in km - #givi -> converted to miles
        return d;
    }


    deg2rad(deg)
    {
        return deg * (Math.PI / 180)
    }

    openLink(link)
    {
        window.open(link);
    }

    getDayOfWeek(dayInt)
    {
        var weekday = new Array(7);
        weekday[0] =  "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        return weekday[dayInt];
    }

    getDefaultLocationsList()
    {
        // if (this.defaultLocations === undefined || this.defaultLocations === null)
        // {
        //     // import defaultLocations from './data.json';
        //     this.defaultLocations = defaultLocations;
        // }

        return defaultLocations;
    }

}


export default (new NetworkManager());