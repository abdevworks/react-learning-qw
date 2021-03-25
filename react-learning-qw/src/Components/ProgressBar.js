import React, {useState} from 'react';

export default function ProgressBar(){

    const [progress, setProgress] = useState(30);

    return(
        <div className="h-3 bg-gray-300 rounded-xl overflow-hidden">
            <div className="bg-blue-400 h-3 w-20"></div>
        </div>
    );
}