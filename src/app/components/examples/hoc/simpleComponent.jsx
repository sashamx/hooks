import React from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button
                    className="btn btn-secondary"
                    onClick={() => onLogOut()}
                >
                    Выйти из системы
                </button>
            ) : (
                <button className="btn btn-primary" onClick={() => onLogin()}>
                    Войти
                </button>
            )}
        </>
    );
};

SimpleComponent.propTypes = {
    isAuth: PropTypes.string,
    onLogOut: PropTypes.func,
    onLogin: PropTypes.func
};

export default SimpleComponent;
