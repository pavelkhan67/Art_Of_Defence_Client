import React from 'react';
import useClass from '../../hooks/useClass';
import Class from './Class';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";

const Classes = () => {
    const [classes] = useClass();
    const AllClass = classes;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <Helmet>
                <title>Art Of Defense | Classes</title>
            </Helmet>
            <div className="grid md:grid-cols-2 gap-6 my-10">
                {
                    AllClass.map(cla => <Class
                        key={cla._id}
                        cla={cla}
                    ></Class>)
                }
            </div>
        </motion.div>
    );
};

export default Classes;