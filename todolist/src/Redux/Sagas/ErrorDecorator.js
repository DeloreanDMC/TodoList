export default function ErrorDecorator({saga, finall, errorsHandler, canRepeat=3, repeatCondition=()=>true}) {
    const maxRepeat = canRepeat;
    return function* wrapper(...args) {
        yield (function* repeat() {
            try {
                yield saga(...args);
                canRepeat = maxRepeat;
            } catch(err) {
                if (repeatCondition(err) && canRepeat) {
                    canRepeat-=1;
                    yield repeat();
                } else {
                    yield errorsHandler(err,...args);
                }
            } finally {
                yield finall();
            }
        })();
    }
}
export const sagaErrorWrapper = (finall,errorsHandler,repeatCondition) => saga => ErrorDecorator({
    saga,
    finall,
    errorsHandler,
    repeatCondition
});
