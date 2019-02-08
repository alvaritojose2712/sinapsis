import React from 'react';

function csrf_token() {
   
    return document.querySelector("meta[name='csrf-token']").getAttribute("content");
}
const CSRF = () => {
    return (
        <input type="hidden" name="_token" defaultValue={csrf_token()} />
    );
};

const Put = () => {
    return (
        <input type="hidden" name="_method" defaultValue="PUT"/>
    );
};
const Patch = () => {
    return (
        <input type="hidden" name="_method" defaultValue="PATCH"/>
    );
};
const Delete = () => {
    return (
        <input type="hidden" name="_method" defaultValue="DELETE"/>
    );
};
export {CSRF,Put,Delete,Patch};