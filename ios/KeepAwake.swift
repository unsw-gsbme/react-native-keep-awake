import UIKit

@objc(KeepAwake)
class KeepAwake: NSObject {
    
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc func activate() -> Void {
        DispatchQueue.main.async {
            let app = UIApplication.shared;
            app.isIdleTimerDisabled = true;
        }
    }
    

    @objc func deactivate() -> Void {
        DispatchQueue.main.async {
            let app = UIApplication.shared;
            app.isIdleTimerDisabled = false;
        }
    }
}
