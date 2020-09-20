import React from 'react';

type Props = {
    message: string;
}

const Hello = ({ message }: Props) => {
return<h1>Hello {message}</h1>
};

export default Hello;