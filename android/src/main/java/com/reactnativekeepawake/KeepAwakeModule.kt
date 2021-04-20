package com.reactnativekeepawake

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import android.view.WindowManager

class KeepAwakeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "KeepAwake"
    }

    @ReactMethod
    fun activate() {
        val activity = getCurrentActivity();

        activity?.runOnUiThread(Runnable {
            activity.getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        })
    }

    @ReactMethod
    fun deactivate() {
        val activity = getCurrentActivity();

        activity?.runOnUiThread(Runnable {
            activity.getWindow().clearFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);
        })
    }
    
}
