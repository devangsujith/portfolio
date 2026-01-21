const https = require('https');

const urls = [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1542296332-2e44a996aaad?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1596711409689-d58673752766?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1530103862676-de3c9da59af7?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1508361001413-7a9dca21d08a?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1572886733226-9d32d04a7905?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1635338162234-fc56be874b3f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517260815180-2a865f171097?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1560964645-5c9f3996642f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1550953683-146313a52c1e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1615965936798-e7e0458df864?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1516087955562-b130e54d3d2c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1518619574483-e02eb4718cd3?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1483838222049-59eb4ee8dbe5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1517299588998-41f8f2acd653?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1528697203043-733d7c149faf?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1534445688536-e04746dd0484?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1519003300449-623992b98211?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1594911772125-07fc7a2d8d9f?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1621683418873-1991bd67d025?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1563299796-b729d0af54a5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1548268770-692383c2718e?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1599640845513-5c290847f6eb?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1559599238-308793637427?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800'
];

async function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            if (res.statusCode >= 200 && res.statusCode < 300) {
                resolve({ url, status: 'OK' });
            } else {
                resolve({ url, status: 'FAIL', code: res.statusCode });
            }
        }).on('error', (e) => {
            resolve({ url, status: 'ERROR', error: e.message });
        });
    });
}

async function validateAll() {
    console.log('Validating URLs...');
    const results = await Promise.all(urls.map(u => checkUrl(u)));
    const failed = results.filter(r => r.status !== 'OK');

    if (failed.length === 0) {
        console.log('All URLs are valid!');
    } else {
        console.log('Found failed URLs:');
        failed.forEach(f => console.log(JSON.stringify(f)));
    }
}

validateAll();
