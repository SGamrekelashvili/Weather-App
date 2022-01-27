import {
  StyleSheet,
  Animated,
  Text,
  View,
  TextInput,
  Keyboard,
  InteractionManager,
} from 'react-native';
import React, {forwardRef, useImperativeHandle, useCallback} from 'react';

const Search = (props, ref) => {
  const [open, setOpen] = React.useState(false);
  const fadeAnim = React.useRef(new Animated.Value(-60)).current;
  const textInputRef = React.useRef();

  useImperativeHandle(ref, () => ({
    HandleSearch: () => {
      HandleSearch();
    },
    getState: () => {
      getState();
    },
  }));

  const getState = useCallback(() => {
    return open;
  }, [open]);

  const HandleSearch = useCallback(() => {
    console.warn(!open);
    setOpen(!open);
  }, [open]);

  React.useEffect(() => {
    if (open) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 500,
      }).start();
      if (textInputRef) {
        textInputRef.current.focus();
      }
    } else {
      Animated.timing(fadeAnim, {
        toValue: -50,
        duration: 500,
      }).start();
      Keyboard.dismiss();
    }
  }, [open]);

  return (
    <Animated.View
      style={{
        height: 50,
        marginTop: fadeAnim,
        justifyContent: 'center',
      }}>
      <TextInput style={styles.input} ref={textInputRef} />
    </Animated.View>
  );
};

export default forwardRef(Search);

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 2,
    zIndex: 99,
  },
});
