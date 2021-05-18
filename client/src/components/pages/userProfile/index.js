import React, { useContext, useEffect, useState } from 'react';

import AuthContext from '../../../context/auth/authContext';
import UserContext from '../../../context/user/userContext';

import UserInfo from './UserInfo';
import Artworks from './artworksProfile/ArtworkListProfile';
import useStyles from './profile.styles';

const UserProfile = () => {

    const classes = useStyles();

    const { user } = useContext(AuthContext);
    const {
        buyedArtworks,
        onSellArtworks,
        soldArtworks,
        getOnSellArtworks,
        getSoldArtworks,
        getBuyedArtworks
    } = useContext(UserContext);

    const [buyed, setBuyed] = useState([]);
    const [onSell, setOnSell] = useState([]);
    const [sold, setSold] = useState([]);
    const [shouldRefresh, setShouldRefresh] = useState(false);

    const loadArtworks = async () => {
        await getBuyedArtworks(user._id);
        await getOnSellArtworks(user._id);
        await getSoldArtworks(user._id);
    };

    useEffect(() => {
        if (user) {
            loadArtworks();
        }
        if (shouldRefresh) {
            loadArtworks();
        }
        return () => setShouldRefresh(false);
        //eslint-disable-next-line
    }, [shouldRefresh]);

    useEffect(() => {
        setBuyed(buyedArtworks);
        setOnSell(onSellArtworks);
        setSold(soldArtworks);
    }, [buyedArtworks, onSellArtworks, soldArtworks,]);

    return (
        <div className={ classes.root }>
            <UserInfo setShouldRefresh={ setShouldRefresh } />
            <section>
                <h2>Your shopping</h2>
                <Artworks
                    artworkList={ buyed }
                    editable={ false }
                    refresh={ setShouldRefresh }
                />
            </section>
            {user.role === 'artist' && <>
                <section>
                    <h2>Your artworks on sell</h2>
                    <Artworks
                        artworkList={ onSell }
                        editable={ true }
                        setShouldRefresh={ setShouldRefresh }
                    />
                </section>
                <section>
                    <h2>Your sales</h2>
                    <Artworks
                        artworkList={ sold }
                        editable={ false }
                        setShouldRefresh={ setShouldRefresh }
                    />
                </section>
            </> }
        </div>
    );
};

export default UserProfile;
