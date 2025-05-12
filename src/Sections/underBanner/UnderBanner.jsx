import React from 'react'
import { motion } from 'framer-motion'
import '../underBanner/UnderBanner.css'
import { RiTeamFill } from 'react-icons/ri'
import { TbPlayFootball } from 'react-icons/tb'
import { GiChampions, GiStairsGoal } from 'react-icons/gi'

export default function UnderBanner() {
    return (
        <section className="Under-banner py-5">
            <div className="container">
                <div className="row g-3">
                    <div className="col-lg-12">
                        <div className="text-center mb-5">
                            <h2 className='text-head fw-bold'>
                               <span className='action fw-medium'>Building</span>  Champions Of Tomorrow
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <motion.div
                            className="card  shadow-sm  border-0 rounded-4 p-lg-3 p-sm-2 h-100"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <div className="card-body">
                                <div className="Icon-card mb-3">
                                    <TbPlayFootball size={90} />
                                </div>
                                <h5 className="card-title fw-bold mb-3">Youth Academy</h5>
                                <p className="card-text text-muted">A great training program for the younger players</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <motion.div
                            className="card shadow-sm  border-0 rounded-4 p-lg-3 p-sm-2 h-100"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <div className="card-body">
                                <div className="Icon-card mb-3">
                                    <RiTeamFill size={60} />
                                </div>
                                <h5 className="card-title fw-bold mb-3">Team Unity</h5>
                                <p className="card-text text-muted">Being a team player has a deeper sense in sports</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <motion.div
                            className="card shadow-sm  border-0 rounded-4 p-lg-3 p-sm-2 h-100"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <div className="card-body">
                                <div className="Icon-card mb-3">
                                    <GiStairsGoal size={60} />
                                </div>
                                <h5 className="card-title fw-bold mb-3">Training</h5>
                                <p className="card-text text-muted">Effective training from our professional coaches</p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <motion.div
                            className="card shadow-sm  border-0 rounded-4 p-lg-3 p-sm-2 h-100"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                        >
                            <div className="card-body">
                                <div className="Icon-card mb-3">
                                    <GiChampions size={60} />
                                </div>
                                <h5 className="card-title fw-bold mb-3">Championship</h5>
                                <p className="card-text text-muted">All our players get to take part in championships</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
