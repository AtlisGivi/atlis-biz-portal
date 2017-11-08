import React, {Component} from "react";
import './App.css';
import {StaggeredMotion, Motion, spring, presets} from "react-motion";

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};

    }

    componentDidMount()
    {
    }

    componentWillUnmount()
    {
        window.clearTimeout(this.timeout);
    }


    render()
    {
        let isMobile = this.props.isMobile;

        var homeStyle = {};

        var headerImageStyle = {
            margin: 'auto',
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '100%',
        };

        var headerImageMobileStyle = {
            margin: 'auto',
            position: 'absolute',
            top: '48px',
            left: '0px',
            height: isMobile ? '320px' : '',
            width: '100%',
            objectFit: 'scale-down',
            backgroundPosition: 'center',
        };

        var welcomeStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: isMobile ? '55%' : '26%',
            margin: 'auto',
            textAlign: 'center',
            marginTop: isMobile ? '24px' : '72px',
        };

        var welcomeTextStyle = {
            color: '#FF684D',
            fontWeight: 'bold',
            fontSize: isMobile ? '160%' : '248%',
        };

        var welcomeSubtitleStyle = {
            color: '#000',
            fontSize: isMobile ? '95%' : '130%',
            marginTop: isMobile ? '18px' : '66px',
        };

        var askButtonStyle = {
            outline: 'none',
            height: isMobile ? '38px' : '48px',
            border: 'none',
            textAlign: 'center',
            width: '60%',
            color: '#FFF',
            cursor: 'pointer',
            fontSize: isMobile ? '95%' : '100%',
            marginTop: isMobile ? '18px' : '66px',

            borderRadius: '2px',
        };

        var consStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: isMobile ? '90%' : '70%',
            margin: 'auto',
            marginTop: isMobile ? '12px' : '100px',
            marginBottom: isMobile ? '72px' : '100px',
        };

        var conItemStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: isMobile ? 'center' : 'left',
            width: isMobile ? '100%' : '28%',
            marginTop: isMobile ? '42px' : ''
        };

        var conImageStyle = {
            width: '120px',
            height: '120px',
            objectFit: 'cover',
            backgroundPosition: 'center',
            marginBottom: isMobile ? '12px' : '24px',
        };

        var conTitleStyle = {
            color: '#000',
            fontSize: '140%',
            marginBottom: isMobile ? '12px' : '24px',
            fontWeight: '600'
        };

        var conTextStyle = {
            color: '#999',
            fontSize: '100%',
            textAlign: isMobile ? 'center' : 'left'
        };

        var bodyStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            padding: isMobile ? '' : '100px',
            paddingTop: isMobile ? '60px' : '120px',
            paddingBottom: isMobile ? '0px' : '10px',
            backgroundColor: '#F4F7FA'
        };

        var bodyRowStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: isMobile ? '95%' : '80%',
            margin: 'auto',
            marginTop: isMobile ? '' : '-80px',
            marginBottom: isMobile ? '30px' : ''
        };

        var bodySecondRowStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: isMobile ? '95%' : '80%',
            margin: 'auto',
            marginTop: isMobile ? '' : '-80px',
            marginBottom: isMobile ? '0px' : ''
        };


        var bodyItemStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'left',
            width: isMobile ? '90%' : '34%',
            textAlign: isMobile ? 'center' : 'left',
        };

        var bodyTitleStyle = {
            color: '#000',
            fontSize: '170%',
            marginBottom: '24px',
            fontWeight: '600',
            lineHeight: '1.3'
        };

        var bodyImageStyle = {
            width: isMobile ? '100%' : '58%',
            objectFit: 'cover',
            backgroundPosition: 'center',
        };

        var countsStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            padding: isMobile ? '18px' : '100px',
            paddingTop: isMobile ? '48px' : '120px',
            paddingBottom: isMobile ? '18px' : '112px',
            backgroundColor: '#FFF'
        };

        var countsTitleStyle = {
            color: '#000',
            fontSize: isMobile ? '155%' : '190%',
            marginBottom: isMobile ? '36px' : '48px',
            width: isMobile ? '100%' : '36%',
            fontWeight: '400',
            lineHeight: isMobile ? '1.3' : '1.5'
        };

        var countsRowStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: isMobile ? '95%' : '80%',
            margin: 'auto',
        };

        var countsItemStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: isMobile ? '72%' : '25%',
            textAlign: 'center',
            marginBottom: isMobile ? '36px' : ''
        };

        var countsTextStyle = {
            color: '#999',
            fontSize: '110%',
            textAlign: 'center'
        };

        var joinStyle = {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: isMobile ? 'center' : 'flex-end',
            margin: 'auto',
            padding: isMobile ? '12px' : '100px',
            paddingTop: isMobile ? '48px' : '100px',
            paddingBottom: isMobile ? '48px' : '100px',
            backgroundColor: '#FF684D',
        };

        var joinButtonStyle = {
            outline: 'none',
            height: '48px',
            textAlign: 'center',
            width: isMobile ? 'calc(100% - 24px)' : '18%',
            cursor: 'pointer',
            fontSize: '100%',
            marginTop: isMobile ? '24px' : '66px',
            border: 'solid',
            borderWidth: '1px',
            borderColor: '#FFF',
            borderRadius: '2px',
            marginRight: isMobile ? '' : '18%'
        };

        let categories = [];
        categories = categories.concat("0");
        categories = categories.concat("1");
        categories = categories.concat("2");

        return (


            <StaggeredMotion
                defaultStyles={categories.map(category => (
                    {x: 1500, opacity: 0}
                ))}
                styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
                        return i === 0
                            ? {x: spring(0, presets.stiff), opacity: spring(1)}
                            :
                            {
                                x: spring(prevInterpolatedStyles[i - 1].x, presets.stiff),
                                opacity: spring(1, presets.stiff)
                            };
                    }
                )}>

                {interpolatingStyles =>


                    <div style={homeStyle}>
                        {interpolatingStyles.map((style, i) => {
                            // console.info(this.state.trendingCategories[i]);
                            const animationStyle = {
                                WebkitTransform: `translate3d(${style.x}px, 0, 0)`,
                                opacity: style.opacity
                            };
                            if (i === 0)
                            {
                                return <div style={animationStyle}
                                            key={i}>
                                    <img
                                        src={isMobile ? '/portal_header_image_mobile.png' : '/portal_header_image.png'}
                                        alt='Atlis - Find Local Restaurants, Bars & Busiעnesses'
                                        style={isMobile ? headerImageMobileStyle : headerImageStyle}/>
                                </div>
                            }
                            if (i === 1)
                            {
                                return <div style={animationStyle} key={i}>
                                    <div style={welcomeStyle}>
                                        {isMobile ?
                                            <span style={welcomeTextStyle}>Welcome to Atlis for Business</span>
                                            :
                                            <span style={welcomeTextStyle}>Welcome to <br/> Atlis for Business</span>}
                                        <span
                                            style={welcomeSubtitleStyle}>A new way to connect with your customers and gain new ones.</span>

                                        <button onClick={this.getStarted.bind(this)} className="AskButton"
                                                style={askButtonStyle}>
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            }
                            if (i === 2)
                            {
                                return <div style={animationStyle} key={i}>
                                    <div style={consStyle}>
                                        <div style={conItemStyle}>
                                            <img
                                                src={'/con_item_1.png'}
                                                alt='Only Positivity' style={conImageStyle}/>
                                            <span style={conTitleStyle}>Only Positivity</span>
                                            <span style={conTextStyle}>Reviews are outdated. Atlis is a place for positive recommendations, not negative reviews.</span>
                                        </div>
                                        <div style={conItemStyle}>
                                            <img
                                                src={'/con_item_2.png'}
                                                alt='Only Positivity' style={conImageStyle}/>
                                            <span style={conTitleStyle}>Customer Referrals</span>
                                            <span style={conTextStyle}>Give your customers a bigger voice and let them recommend you to anyone in your city, not just friends.</span>
                                        </div>
                                        <div style={conItemStyle}>
                                            <img
                                                src={'/con_item_3.png'}
                                                alt='Only Positivity' style={conImageStyle}/>
                                            <span style={conTitleStyle}>Engagement Tracking</span>
                                            <span style={conTextStyle}>Offer services to interested users at the best time, even add a deal to entice them to visit.</span>
                                        </div>
                                    </div>
                                </div>
                            }
                            if (i === 3)
                            {
                                return <div style={animationStyle} key={i}>
                                    <div style={bodyStyle}>
                                        <div style={bodyRowStyle}>
                                            <div style={bodyItemStyle}>
                                                <span style={bodyTitleStyle}>Consumers nearby are asking for your services.</span>
                                                <span style={conTextStyle}>Atlis infuses word of mouth recommendations with the power to reach out to customers who have expressed interest in your business. Answer them in real time through our platform.</span>
                                            </div>
                                            <img
                                                src={'/body_image_1.png'}
                                                alt='Only Positivity' style={bodyImageStyle}/>
                                        </div>

                                        <div style={bodySecondRowStyle}>
                                            <img
                                                src={'/body_image_2.png'}
                                                alt='Only Positivity' style={bodyImageStyle}/>

                                            <div style={bodyItemStyle}>
                                                <span style={bodyTitleStyle}>We give you a larger audioce than ever before.</span>
                                                <span style={conTextStyle}>Word-of-mouth referrals are the best. Atlis helps you keep track of the customers who recommend you the most so you can engage with them and their followers.</span>
                                            </div>
                                        </div>

                                        <div style={bodyRowStyle}>
                                            <div style={bodyItemStyle}>
                                                <span style={bodyTitleStyle}>Monitor your business and customize your ads.</span>
                                                <span style={conTextStyle}>Atlis allows you to create personalized ads directly from our website. Once live, you can track the metrics of your ad directly on your account page to see the users that are reacting to your posts and visiting your location.</span>
                                            </div>

                                            <img
                                                src={'/body_image_3.png'}
                                                alt='Only Positivity' style={bodyImageStyle}/>
                                        </div>
                                    </div>
                                </div>
                            }
                            if (i === 4)
                            {
                                return <div style={animationStyle} key={i}>
                                    <div style={countsStyle}>
                                        <div style={countsTitleStyle}>20,000+ businesses are already part of the Atlis
                                            community
                                        </div>

                                        <div style={countsRowStyle}>
                                            <div style={countsItemStyle}>
                            <span style={{
                                color: '#00CEC2',
                                fontSize: '300%',
                                marginBottom: isMobile ? '10px' : '18px',
                                fontWeight: 'bold',
                            }}>12,900</span>
                                                <span style={countsTextStyle}>Users and counting are on the Atlis platform</span>
                                            </div>

                                            <div style={countsItemStyle}>
                             <span style={{
                                 color: '#3674A7',
                                 fontSize: '300%',
                                 marginBottom: isMobile ? '10px' : '18px',
                                 fontWeight: 'bold',
                             }}>600</span>
                                                <span style={countsTextStyle}>Average business views daily through the app</span>
                                            </div>

                                            <div style={countsItemStyle}>
                             <span style={{
                                 color: '#F9C000',
                                 fontSize: '300%',
                                 marginBottom: isMobile ? '10px' : '18px',
                                 fontWeight: 'bold',
                             }}>245</span>
                                                <span
                                                    style={countsTextStyle}>Average number of Asks posted per day</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }
                            if (i === 5)
                            {
                                return <div style={animationStyle} key={i}>
                                    <div style={joinStyle}>
                                        <span style={{
                                            color: '#FFF',
                                            fontSize: isMobile ? '200%' : '300%',
                                            fontWeight: 'bold',
                                            width: isMobile ? '95%' : '36%',
                                            textAlign: isMobile ? 'center' : 'left',
                                            lineHeight: '1.3'
                                        }}>Ready to join the new age of the business Ask?</span>

                                        <button onClick={this.getStarted.bind(this)} className="JoinStyle"
                                                style={joinButtonStyle}>
                                            Get Started
                                        </button>
                                    </div>
                                </div>
                            }

                        })}


                    </div>
                }
            </StaggeredMotion>

        );
    }

    getStarted()
    {

    }

}

Home.contextTypes = {
    router: React.PropTypes.object
};


export default Home;
