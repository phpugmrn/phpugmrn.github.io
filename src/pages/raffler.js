import React, { useState, lazy  } from 'react'
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ConfettiExplosion from 'react-confetti-explosion';
import { Formik, Form, Field, FieldArray } from 'formik'

function Raffler () {
    return (
        <Layout
            title="PHPUGMRN Raffler"
            description="Raffle Tool"
        >
            <main>
                <BrowserOnly fallback={<div>Loading...</div>}>
                    {() => {
                        const [mustSpin, setMustSpin] = useState(false);
                        const [prizeNumber, setPrizeNumber] = useState(0);
                        const [participants, setParticipants] = useState([{option: ''}, {option: ''}, {option: ''}]);
                        const [isExploding, setIsExploding] = React.useState(false);

                        const Wheel = require('react-custom-roulette').Wheel;

                        const handleStartSpinningClick = (values) => {
                            if (!mustSpin) {
                                const newPrizeNumber = Math.floor(Math.random() * values.participants.length);
                                setParticipants(values.participants);
                                setPrizeNumber(newPrizeNumber);
                                setMustSpin(true);
                            }
                        }

                        const getRandomRolor = ()=> {
                            var color = "#";
                            for (var i = 0; i < 6; i++) {
                                color += Math.floor(Math.random() * 10);
                            }
                            return color;
                        }

                        return <div className="container margin-vert--lg">
                            <div className="row">
                                <div className="col col--3"></div>
                                <div className="col col--9">
                                    <h2>PHPUGMRN Raffler</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col--3"></div>
                                <div className="col col--3">
                                    <Formik
                                        initialValues={{ participants: [{option: '', style: { backgroundColor: getRandomRolor()}}] }}
                                        onSubmit={handleStartSpinningClick}
                                        render={({ values }) => (
                                            <Form>
                                                <FieldArray
                                                    name="participants"
                                                    render={arrayHelpers => (
                                                        <div>
                                                            <div className="margin-bottom--sm">
                                                                <button className="button button--primary" type="submit">Let's go</button>
                                                            </div>
                                                            {(
                                                                values.participants.map((friend, index) => (
                                                                    <div key={index}>
                                                                        <Field name={`participants.${index}.option`} />
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => arrayHelpers.remove(index)} // remove participant from the list
                                                                        >
                                                                            -
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => arrayHelpers.insert(index, {option: '', style: { backgroundColor: getRandomRolor()}})} // insert an empty string at a position
                                                                        >
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                ))
                                                            )}
                                                        </div>
                                                    )}
                                                />
                                            </Form>
                                        )}
                                    />
                                </div>
                                <div className="col col--6">
                                    {isExploding &&
                                        <ConfettiExplosion
                                            force={0.8}
                                            duration={3000}
                                            particleCount={250}
                                            width={1600}
                                            onComplete={() => {
                                                setIsExploding(false);
                                            }}
                                        />}
                                    <Wheel
                                        mustStartSpinning={mustSpin}
                                        prizeNumber={prizeNumber}
                                        data={participants}
                                        perpendicularText={true}
                                        onStopSpinning={() => {
                                            setMustSpin(false);
                                            setIsExploding(true);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    }}
                </BrowserOnly>
            </main>
        </Layout>
    );
}
export default Raffler;
