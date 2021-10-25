import Foundation
import Capacitor
import UserLeapKit

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(SprigPlugin)
public class SprigPlugin: CAPPlugin {

    @objc func configure(_ call: CAPPluginCall) {
        let environmentId = call.getString("environmentId") ?? ""
        Sprig.shared.configure(withEnvironment: environmentId)
        call.resolve()
    }
    
    @objc func setUserIdentifier(_ call: CAPPluginCall) {
        let identifier = call.getString("identifier") ?? ""
        Sprig.shared.setUserIdentifier(identifier)
        call.resolve()
    }
    
    @objc func setEmailAddress(_ call: CAPPluginCall) {
        let email = call.getString("email") ?? ""
        Sprig.shared.setEmailAddress(email)
        call.resolve()
    }
    
    @objc func setVisitorAttribute(_ call: CAPPluginCall) {
        let key = call.getString("key") ?? ""
        let value = call.getString("value") ?? ""
        Sprig.shared.setVisitorAttribute(key: key, value: value)
        call.resolve()
    }
    
    @objc func removeVisitorAttributes(_ call: CAPPluginCall) {
        let keys = call.getArray("key") ?? [String]()
//        keys.forEach(<#T##body: (JSValue) throws -> Void##(JSValue) throws -> Void#>)
//        Sprig.shared.removeVisitorAttributes(keys)
        call.resolve()
    }
    
    @objc func trackEvent(_ call: CAPPluginCall) {
        let eventName = call.getString("eventName") ?? ""
        Sprig.shared.track(eventName: eventName)
        call.resolve()
    }
    
    @objc func presentSurvey(_ call: CAPPluginCall) {
        DispatchQueue.main.async { [weak self] in
            guard let bridge = self?.bridge else {
                return
            }
            let eventName = call.getString("eventName") ?? ""
            Sprig.shared.track(eventName: eventName) { SurveyState in
                var surveyState = 0
                switch SurveyState {
                    case .ready:
                        Sprig.shared.presentSurvey(from: (bridge.viewController)!)
                        break
                    case .noSurvey:
                        surveyState = 1
                        break
                    case .disabled:
                        surveyState = 2
                        break
                @unknown default:
                    fatalError("Received unexpected survey state")
                }
                call.resolve([
                    "surveryState": surveyState
                ])
            }
        }
    }
    
    @objc func presentDebugSurvey(_ call: CAPPluginCall) {
        DispatchQueue.main.async { [weak self] in
            guard let bridge = self?.bridge else {
                return
            }
            let viewController = bridge.viewController
            Sprig.shared.presentDebugSurvey(from: viewController!)
            call.resolve()
        }
    }
    
    @objc func logout(_ call: CAPPluginCall) {
        Sprig.shared.logout()
        call.resolve()
    }
}
