import React, {Component} from 'react';
import Aboutnya from '../components/Aboutnya';
import Contactnya from '../components/Contactnya';
import Experiencenya from '../components/Experiencenya';
import Heronya from '../components/Heronya';
import Navbarnya from '../components/Navbarnya';
import Projectnya from '../components/Projectnya';
import Servicenya from '../components/Servicenya';

class Profile extends Component {
    render() {
        return (
            <div>
                <Navbarnya />
                <main ref="main">
                    <Heronya />
                    <Aboutnya />
                    <Servicenya />
                    <Experiencenya />
                    <Projectnya />
                    <Contactnya />
                </main>
            </div>
        )
    }
}

export default Profile;