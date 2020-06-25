import React, { Component } from 'react'
import Loadable from 'react-loadable'

class loadingComponent extends Component {
    render() {
        return <div />
    }
}

export default (loader, loading = loadingComponent) => {
    return Loadable({
        loader,
        loading
    })
}
