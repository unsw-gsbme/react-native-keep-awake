import UIKit

@objc(KeepAwake)
class KeepAwake: NSObject {
    
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
