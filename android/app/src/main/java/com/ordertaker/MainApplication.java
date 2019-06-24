package com.ordertaker;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import org.reactnative.camera.RNCameraPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.imagepicker.ImagePickerPackage;
import com.microsoft.codepush.react.CodePush;
import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final String CODEPUSH_KEY_PRODUCTIO = "PqHlju1P1-FNN8Cw5fYmnMr7Qw5-70e31123-67db-49cf-a3ce-0e1722fc224f";
    private final String CODEPUSH_KEY_STAGING = "ZGRJv8lugW9Gg-nc0ppUHGsbZDI870e31123-67db-49cf-a3ce-0e1722fc224f";

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
    }
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new RNDeviceInfo(),
            new RNCameraPackage(),
            new AsyncStoragePackage(),
            new RNGestureHandlerPackage(),
            new VectorIconsPackage(),
            new ImagePickerPackage(),
            new CodePush(CODEPUSH_KEY_STAGING, getApplicationContext(), BuildConfig.DEBUG)
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
