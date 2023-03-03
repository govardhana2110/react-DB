import React, {
  useContext,
  createContext,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { node } from 'prop-types';
import { useSnackbar } from 'notistack';
// import Text from '../text';

export const SnackBarContext = createContext();

export const SnackbarProviders = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  useEffect(() => {
    let timer = null;
    timer = setTimeout(() => closeSnackbar(), 5000);
    return () => (timer !== null ? clearTimeout(timer) : null);
  }, [closeSnackbar]);

  const addAlert = useCallback(
    (content) =>
      enqueueSnackbar(content.message, {
        variant: content.status,
        preventDuplicate: true,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        autoHideDuration: 3000,
      }),
    [enqueueSnackbar],
  );

  const value = useMemo(
    () => ({
      addAlert,
    }),
    [addAlert],
  );

  return (
    <SnackBarContext.Provider value={value}>
      {children}
    </SnackBarContext.Provider>
  );
};
SnackbarProviders.propTypes = {
  children: node,
};
const useSnackBars = () => useContext(SnackBarContext);
export default useSnackBars;
