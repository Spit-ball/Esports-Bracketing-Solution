import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
    if (metric && metric.name && metric.delta && metric.id) {
        // Implement your analytics tracking here
        console.log({ name: metric.name, delta: metric.delta, id: metric.id });
    }
}

// Initialize the metrics
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);

export default sendToAnalytics;
