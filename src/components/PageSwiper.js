import { useEffect, useRef, useState } from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";
import { useDispatch, useSelector } from "react-redux";
import { getPageThunk, nextPage, prevPage, stopLoading } from "../store";
import { Dimensions } from "react-native";
import LoadingSpinner from "./LoadingSpinner";
import { View } from "react-native";
import Text from "./UI/Text";
import { colors } from "../theme";
import { getProperSize } from "../utils/helpers";

const { width } = Dimensions.get("window");

const PageSwiper = ({ currentPage }) => {
  const [activePage, setActivePage] = useState(null);

  const scrollViewRef = useRef();

  const { pagesUrl, loading } = useSelector((state) => state.pages);

  const dispatch = useDispatch();

  useEffect(() => {
    if (pagesUrl[currentPage - 1]) {
      dispatch(stopLoading());
    } else {
      dispatch(getPageThunk(currentPage));
    }
  }, [dispatch, getPageThunk, currentPage]);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  const handlePageChange = (index) => {
    if (index - (activePage - 1) === 1) {
      dispatch(nextPage());
    } else if (index - (activePage - 1) === -1) {
      dispatch(prevPage());
    }
  };

  const handleFirstLoad = (w, h) => {
    const target = w - activePage * width;
    scrollViewRef.current.scrollTo({ x: target });
    console.log(activePage);
    console.log(target);
  };

  return (
    <ScrollView
      horizontal
      pagingEnabled
      onMomentumScrollEnd={(e) =>
        handlePageChange(
          (e.nativeEvent.contentSize.width - e.nativeEvent.contentOffset.x) /
            360 -
            1
        )
      }
      onContentSizeChange={handleFirstLoad}
      ref={scrollViewRef}
    >
      {pagesUrl
        .slice(0)
        .reverse()
        .map((url, i) => {
          return (
            <View key={i} style={styles.imageContainer}>
              <Image
                source={{ uri: url }}
                style={styles.image}
                onError={(e) => console.log(e.currentTarget)}
              />
            </View>
          );
        })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  swiper: {},
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: width,
    height: width / 0.66,
  },
  image: {
    width: width,
    height: width / 0.66,
  },
});

export default PageSwiper;
