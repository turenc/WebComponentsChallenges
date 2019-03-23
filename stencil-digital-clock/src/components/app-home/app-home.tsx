import { Component } from '@stencil/core';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.css',
    shadow: true
})
export class AppHome {

    render() {
        return (
            <div class='app-home'>
                <p>
                    Welcome to the Stencil App Starter.
                    You can use this starter to build entire apps all with
                    web components using Stencil!
                    Check out our docs on <a href='https://stenciljs.com'>stenciljs.com</a> to get started.
                </p>

                <stencil-route-link url='/profile/stencil'>
                    <button>
                        Profile page
                    </button>
                </stencil-route-link>

                <hr />
                <h1>Digital Clock by Stencil</h1>
                <wc-digital-clock timezone="America/New_York" />
                <wc-digital-clock timezone="Asia/Shanghai" />
            </div>
        );
    }
}