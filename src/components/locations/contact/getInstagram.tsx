import React, { useEffect, useState } from "react"
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

interface GalleryProps {
    accessToken: string
    count: number
    profile: string
    pagination?: boolean
}

export const InstagramGallery = (props: GalleryProps) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [error, setError] = useState<Boolean>(false);
  const [instagramData, setInstagramData] = useState<any>(null);
  const [usePagination, setUsePagination] = useState<boolean>(false);
  const [paginationNextUrl, setPaginationNextUrl] = useState<string>("");
  const [paginationPrevUrl, setPaginationPrevUrl] = useState<string>("");

  const fetchInstagramData = (url: string) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.hasOwnProperty("error")) {
          setLoading(false);
          setError(true);
        } else {
          setInstagramData(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setError(true);
        setLoading(true);
      });
  };

  useEffect(() => {
    const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&limit=${props.count}&access_token=${props.accessToken}`;
    fetchInstagramData(url);
  }, []);

  // Pagination - start
  useEffect(() => {
    if (props.pagination) {
      setUsePagination(props.pagination);
    }
  }, [props]);

  useEffect(() => {
    if (instagramData !== null) {
      setPaginationNextUrl(instagramData.paging.next);
      setPaginationPrevUrl(instagramData.paging.previous);
    }
  }, [instagramData]);

  const handlePaginationNext = () => {
    fetchInstagramData(paginationNextUrl);
  };

  const handlePaginationPrev = () => {
    fetchInstagramData(paginationPrevUrl);
  };
    // Pagination - End

  if (loading) {
    return (
      <div className="instagram-gallery border rounded shadow-sm text-center p-4" style={{color: '#8a3ab9'}}>
        <p className="fs-6 mb-0 me-2">Loading images...</p>
        <div className="spinner-grow spinner-grow-sm mt-1" role="status">
          <span className="visually-hidden">...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="alert alert-warning">
        Oops! Something went wrong. Images not loading. :( <br />
        Click <a href={`https://www.instagram.com/${props.profile}/`} rel="noreferrer" target="_blank">here</a> to visit our Instagram page.
      </div>
    );
  }

  return (
    <div className="instagram-gallery">
      <div className="instagram-items-wrapper">
        {instagramData.data
          .slice(0, props.count)
          .map((item: any, index: any) => (
              <div key={index} className="instagram-item rounded shadow-sm">
                <a
                  key={index}
                  href={item.permalink}
                  className="instagram-link rounded"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="instagram-item-caption position-absolute h-100 w-100 overflow-hidden p-3">
                    <span className="d-block h-100 rounded overflow-hidden">
                      {item.caption} 
                    </span>
                  </div>

                  { item.media_type === "IMAGE" || item.media_type === "CAROUSEL_ALBUM" ? (
                      <img
                          className="instagram-image rounded"
                          key={index}
                          src={item.media_url}
                          alt={item.caption}
                      />
                  ) : (
                    <video className="instagram-image rounded" key={index}>
                        <source
                          src={item.media_url}
                          type="video/mp4"
                        />
                    </video>
                  )}
                </a>
              </div>
            ))}
      </div>


      {usePagination && (
        <div className="pagination">
          {true && (
            <button
              className="pagination-btn pagination-prev rounded shadow-sm"
              type="button"
              onClick={handlePaginationPrev}
            >
              <FaArrowLeft />
            </button>
          )}
          {paginationNextUrl && (
            <button
              className="pagination-btn pagination-next rounded shadow-sm ms-2"
              type="button"
              onClick={handlePaginationNext}
            >
              <FaArrowRight />
            </button>
          )}
        </div>
      )}

    </div>
  );
};