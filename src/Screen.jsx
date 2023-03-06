import { Html } from '@react-three/drei'

export default function Screen()
{
    return <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={ 1.17 }
        position={ [ 0, 1.56, - 1.4 ] }
        rotation-x={ - 0.256 }
    >
        <div id="body">
            <div id="wrapper">
                <h1>VINCENT LARREUR</h1>
                <h2>FRONT-END DEVELOPER</h2>

                <p>
                    Just a French Front-End Developer in the making with a passion for the world of IT and trying to discover the world working abroad.
                </p>
                <p>
                    Currently diving in the three.js world !
                </p>

                <a href="https://github.com/VincentLarreur" target="_blank">GITHUB</a>
                <a href="https://www.linkedin.com/in/vincent-larreur/" target="_blank">LINKEDIN</a>
                <a href="mailto:vincent.lrr@gmail.com" target="_blank">MAIL</a>
            </div>
        </div>
    </Html>
}