import React, { Component } from 'react'
import Form from '../Form/Form'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { AuthProvider, AuthConsumer } from '../../Auth/AuthProvider'
import Layout from '../../hoc/Layout/Layout'

class App extends Component {
    render() {
        return(
            <AuthProvider>
                <Layout
                    header={ Header }
                    footer={ Footer }
                >
                    <AuthConsumer>
                        {
                            ({ isAuthorized }) =>
                                isAuthorized ? (
                                    <h1>Авторизован</h1>
                                ) : (
                                    <h1>Не авторизован</h1>
                                )
                        }
                    </AuthConsumer>
                </Layout>
            </AuthProvider>
        )
    }
}

export default App