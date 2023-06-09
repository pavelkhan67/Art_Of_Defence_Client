import React from 'react';
import useClass from '../../hooks/useClass';
import Class from './Class';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const [ classes ] = useClass();
    const AllClass = classes;
    return (
        <div>
            <Helmet>
                <title>Art Of Defense | Classes</title>
            </Helmet>
            <div className="grid md:grid-cols-2 gap-10 my-10">
                {
                    AllClass.map(cla => <Class
                        key={cla._id}
                        cla={cla}
                    ></Class>)
                }
            </div>
        </div>
    );
};

export default Classes;