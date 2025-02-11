import { Suspense } from 'react';
import loadable from '@loadable/component';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loading from 'components/Loading';

const LoginPage = loadable(() => import('pages/LoginPage'));
const RegisterPage = loadable(() => import('pages/RegisterPage'));
const ForgetPasswordPage = loadable(() => import('pages/ForgetPasswordPage'));
const Dashboard = loadable(() => import('pages/Dashboard'));
const SetPassword = loadable(() => import('pages/SetPassword'));

const SamplePageOne = loadable(() => import('pages/SamplePageOne'));
const SamplePageTwo = loadable(() => import('pages/SamplePageTwo'));
const SamplePageThree = loadable(() => import('pages/SamplePageThree'));

const PrivateOutlet = loadable(() => import('components/PrivateOutlet'));

function App() {
    return (
        <div className="h-screen">
            <ToastContainer />
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route
                            path="/forget-password"
                            element={<ForgetPasswordPage />}
                        />
                        <Route
                            path="/user/set-password"
                            element={<SetPassword />}
                        />
                        <Route path="" element={<PrivateOutlet />}>
                            <Route path="" element={<Dashboard />} />
                            <Route
                                path="sample-one"
                                element={<SamplePageOne />}
                            />
                            <Route
                                path="sample-two"
                                element={<SamplePageTwo />}
                            />
                            <Route
                                path="sample-three"
                                element={<SamplePageThree />}
                            />
                        </Route>
                        <Route path="*" element={<Navigate to={'/'} />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
