import {Observable} from 'rxjs';

export const ObservableFetcher = function() {
    let subscriber;

    return {
        fetch: function(asyncCallback, params) {
            return new Promise((resolve, reject) => {
                if (subscriber) {subscriber.unsubscribe()}
                subscriber = Observable.create(function(observer) {
                    asyncCallback(...params).then((data) => {
                        observer.next(data);
                    }, (err) => {
                        observer.error(err);
                    });
                }).subscribe(
                    (id) => {resolve(id)},
                    (err) => {reject(err)}
                );
            });
        },

    };
};
