import MainContainer from './MainContainer.mjs';

const onStart = () => Neo.app({
    appPath : 'examples/button/',
    mainView: MainContainer,
    name    : 'TestApp',
    parentId: 'main-container'
});

export {onStart as onStart};