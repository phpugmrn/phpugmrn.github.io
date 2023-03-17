import React from 'react';
import Layout from '@theme/Layout';
import useStoredFeed from "@theme/useStoredFeed";
import parse from "html-react-parser";

function Mastodon () {
    const maxFeedItems = 10;
    const feedData = useStoredFeed("mastodon");
    const profileTitle = feedData.title;
    const profileLink = feedData.link;
    const profileIcon = feedData.image.url;

    return (
        <Layout
            title="Unser Mastodon Feed"
            description="Unsere aktuellsten Mastodon Toots"
        >
            <main>
                <div className="container margin-vert--lg">
                    {feedData.item.slice(0, maxFeedItems).map((item) => (
                    <div className="row">
                        <div className="col col--3">
                        </div>
                        <div className="col col--6">
                            <div className="avatar margin-bottom--sm">
                                <a
                                    className="avatar__photo-link avatar__photo"
                                    href={profileLink}>
                                    <img
                                        alt={profileTitle}
                                        src={profileIcon}/>
                                </a>
                                <div className="avatar__intro">
                                    <div className="avatar__name">{profileTitle}</div>
                                    <small className="avatar__subtitle">
                                        <a href={item.link}>{item.pubDate}</a>
                                    </small>
                                </div>
                            </div>
                            <div>
                                {parse(item.description)}
                            </div>
                            <hr/>
                        </div>
                        <div className="col col--3">
                        </div>
                    </div>
                    ))}
                    <div className="row">
                        <div className="col col--3">
                        </div>
                        <div className="col col--6">
                            Mehr lesen? Folge uns auf Mastodon <a href={profileLink}>@phpugmrn@phpc.social</a>.
                        </div>
                        <div className="col col--3">
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
export default Mastodon;
