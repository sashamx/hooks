import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const NumListComponent = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        return (
            <div className="row">
                <div className="col-auto">#{i + 1}</div>{" "}
                <div className="col">{React.cloneElement(child)}</div>
            </div>
        );
    });
};
NumListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <NumListComponent>
                <Component />
                <Component />
                <Component />
            </NumListComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
