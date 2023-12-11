// import { store } from '../store';
// import { apiSlice } from './apiSlice';
// import { updateObjectEntry } from '../helpers';

// export const optimisticUpdater = async (patchResults, queryFulfilled, onFail, onSuccess) => {
//   try {
//     const result = await queryFulfilled;
//     if (result?.data?.error) throw new Error(result.data.error);
//     onSuccess?.(result.data);
//   } catch {
//     if (patchResults) {
//       if (Array.isArray(patchResults)) patchResults.forEach((patchResult) => patchResult.undo());
//       else patchResults.undo();
//     }
//     onFail?.();
//   }
// };

// export const updateCache = ({ keyToUpdate, value, queryName, params }) => {
//   const patchResult = store.dispatch(
//     apiSlice.util.updateQueryData(queryName, { ...params }, (draft) => {
//       if (keyToUpdate) updateObjectEntry(draft, keyToUpdate, value);
//       else {
//         // if 'value' is empty, we consider replacing the draft object
//         if (typeof value !== 'object') return;
//         const objValue = value;
//         Object.keys(objValue).forEach((key) => {
//           draft[key] = objValue[key];
//         });
//       }
//     })
//   );
//   return patchResult;
// };

// export const getCachedQueryResult = (queryName, objectArgs) => {
//   let key = `${queryName}${objectArgs ? `(${JSON.stringify(objectArgs)})` : ''}`;
//   return store.getState()[apiSlice.reducerPath].queries[key]?.data;
// };

// export const prefetchData = async (endpointName, arg) => {
//   store.dispatch(apiSlice.util.prefetch(endpointName, arg, { force: false, ifOlderThan: 10 }));
// };
