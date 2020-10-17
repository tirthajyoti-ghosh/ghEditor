import extendDefaults from '../settings/customOptionSetting';

const textareaVal = (args) => {
  let defaultTextarea;
  let options;
  if (args[0] && typeof args[0] === 'object') {
    options = extendDefaults(args[0]);
    defaultTextarea = document.querySelector(`textarea.ghEditor#${options.container}`);
  } else {
    options = extendDefaults({});

    // eslint-disable-next-line prefer-destructuring
    defaultTextarea = document.querySelectorAll('textarea.ghEditor')[0];
  }
  return [defaultTextarea, options];
};

export default textareaVal;