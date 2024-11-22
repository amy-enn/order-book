import { mockOrderBook } from "../lib/orderBookData";
import { groupByTicker } from "../lib/orderBookUtils";

const OrderBook: React.FC = () => {
    const { bids, asks } = mockOrderBook;

    // sort the bids and asks
    const sortedBids = bids.sort((a, b) => b.price - a.price);
    const sortedAsks = asks.sort((a, b) => a.price - b.price);

    // group the bids and asks by ticker
    const groupedBids = groupByTicker(sortedBids);
    const groupedAsks = groupByTicker(sortedAsks);

    return (
        <div className="order-book">
            {Object.keys(groupedBids).map((ticker) => (
                <div key={ticker} className="ticker-section">
                    <h2>{ticker}</h2>
                    <div className="ticker-tables">
                        <div className="bids">
                            <h3>Bids</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>~Price($)~</th>
                                        <th>~Quantity~</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groupedBids[ticker].map((bid) => (
                                        <tr key={`${bid.price}-${bid.quantity}`}>
                                            <td>${bid.price}</td>
                                            <td>{bid.quantity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="asks">
                            <h3>Asks</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>~Price($)~</th>
                                        <th>~Quantity~</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {groupedAsks[ticker]?.map((ask) => (
                                        <tr key={`${ask.price}-${ask.quantity}`}>
                                            <td>${ask.price}</td>
                                            <td>{ask.quantity}</td>
                                        </tr>
                                    )) || (
                                            <tr>
                                                <td colSpan={2}>No asks available</td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OrderBook;
